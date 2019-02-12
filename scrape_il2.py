from requests import get
import csv
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
import re

class Scrape_IL2(object):
    def __init__(self,html):
        self.raw = html
        # Lists used for table/list generation and filtering.
        self.lMeta = [ "Takeoff speed", 
                "Glideslope speed", 
                "Landing speed" , 
                "Service ceiling", 
                "Dive speed limit",
                "Climb rate at sea level",
                "Climb rate at 3000 m",
                "Climb rate at 6000 m",
                "Flight endurance at 3000 m",
                "Fuel load",
                "Supercharger",
                "Indicated stall speed",
                "Maximum performance turn",
                "Empty weight",
                "Minimum weight",
                "Maximum takeoff weight",
                "Useful load"
                ]

        self.lEngine = [ "Nominal",
                    "Combat power",
                    "Emergency power",
                    "Boosted power",
                    "Take-off power",
                    "Max Cruising power",
                    "International power",
                    "Emergency Max All",
                    "Climb power",
                    "Model"]

    def plane_data(self):
        raw_html = open(self.raw,encoding="utf8").read()   
        html = BeautifulSoup(raw_html, 'html.parser')
        # This Function takes a Beuatifulsoup html object and returns a clean list
        # of plane data.  This function was written for a specific forum post.

        # Find the Comment Parent div for Plane Info
        comment = html.find_all("div", {"data-role": "commentContent"})

        # Clean up, strip russian comments
        for line in comment:
            for row in line.select("div > span"):
                row.extract()

        # Lists used below
        raw = []
        l_final = []
        l_planes = []

        # Create a list stripping out HTML Tags
        for line in comment:
            for row in line.stripped_strings:
                raw.append(row)

        # Clean up comments and surrounding data
        raw.pop(0)
        raw.pop(0)
        raw.pop(len(raw)-1)
        raw.pop(len(raw)-1)

        # Create list of planes to be used to mark them in a future list
        for line in range(len(raw)):
            if "Indicated stall speed in flight configuration:" in raw[line]:
                l_planes.append(raw[line-1])
            #This else includes planes from Flying Circus
            # elif "Engine" == raw[line]:
            #     l_planes.append(raw[line-1])

        # Final List that adds markdown to Game and Plane title
        for line in range(len(raw)):
            value = raw[line]

            for row in l_planes:
                if row == raw[line]:
                    value = "\n## " + raw[line]

            if "Airplanes of" in raw[line]:
                l_final.append("\n# " + raw[line])
            else:
                l_final.append(value)

        # Log out
        file = open("plane.md", "w")
        [ file.write("\n" + line) for line in l_final ]
        file.close()

        # Return the Final list
        return l_final

    def op_features(self):
        file = open("op.md", "w")

        plane_name = ""

        for line in self.plane_data():
            if re.search("## ",line):
                file.write("\n" + line)
            if re.match('-', line):
                file.write("\n" + line)
        file.close()

    def airspeed(self):
        file = open("airspeed.md", "w")

        plane_name = ""

        for line in self.plane_data():
            if re.search("## ",line):
                file.write("\n" + line)
            if re.match('Maximum true air speed', line):
                file.write("\n" + line)
        file.close()

    def oil_water_temp(self):
        file = open("oil_water.md", "w")

        plane_name = ""

        for line in self.plane_data():
            if re.search("## ",line):
                file.write("\n" + line)
            elif re.search('maximum temperature', line):
                file.write("\n" + line)

        file.close()

    def parse_info(self,list_type):
        # Generic Function to parse through info
        if list_type is "meta":
            search_list = self.lMeta
        elif list_type is "engine":
            search_list = self.lEngine
        elif list_type is "speed":
            search_list = self.lSpeed

        filename = list_type + ".md"
        file = open(filename, "w")

        plane_name = ""

        for line in self.plane_data():
            if re.search("## ",line):
                file.write(line)
            for row in search_list:
                if re.match(row, line):
                    file.write("\n" + line)
        file.close()

    def __str__(self):
        return "IL2 Scraper Class"


a = Scrape_IL2("source.html")

a.oil_water_temp()
a.op_features()
a.airspeed()
a.parse_info("meta")
a.parse_info("engine")
