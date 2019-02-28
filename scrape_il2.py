from requests import get
import csv
from requests.exceptions import RequestException
from contextlib import closing
from bs4 import BeautifulSoup
import re

class Scrape_IL2(object):
    def __init__(self,html):
        # Raw source html file.
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
                "Useful load",
                "Maximum load factor",
                "Stall angle of attack",
                "Combat debut"
                ]

        self.lLimits = [ "Nominal",
                    "Combat power",
                    "Emergency power",
                    "Boosted power",
                    "Take-off power",
                    "Max Cruising power",
                    "International power",
                    "Emergency Max All",
                    "Climb power",
                    "Model"]

        self.data = self.plane_data()

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

        # Return the Final list
        return l_final

    def op_features(self):
        # Parse out Operational Features
        result = []

        for line in self.data:
            if re.search("## ",line):
                result.append(line)
            if re.match('-', line):
                result.append(line)

        return result

    def airspeed(self):
        result = []

        for line in self.data:
            if re.search("## ",line):
                result.append(line)
            if re.match('Maximum true air speed', line):
                result.append(line)

        return result

    def oil_water_temp(self):
        result = []

        for line in self.data:
            if re.search("## ",line):
                result.append(line)
            elif re.search('maximum temperature', line):
                result.append(line)

        return result

    def parse_info(self,list_type):
        # Generic Function to parse through info
        if list_type is "meta":
            search_list = self.lMeta
        elif list_type is "limits":
            search_list = self.lLimits
        # elif list_type is "speed":
        #     search_list = self.lSpeed

        result = []

        for line in self.data:
            if re.search("## ",line):
                result.append(line)
            for row in search_list:
                if re.match(row, line):
                    result.append(line)
        return result

    def __str__(self):
        return "IL2 Scraper Class"

def gen_markdown_logs():

    plane_data = Scrape_IL2("source.html")

    file = open("all.md", "w")
    [ file.write("\n" + line) for line in plane_data.plane_data() ]
    file.close()

    file = open("meta.md", "w")
    [ file.write("\n" + line) for line in plane_data.parse_info("meta") ]
    file.close()

    file = open("oil_water.md", "w")
    [ file.write("\n" + line) for line in plane_data.oil_water_temp() ]
    file.close()

    file = open("op.md", "w")
    [ file.write("\n" + line) for line in plane_data.op_features() ]
    file.close()

    file = open("airspeed.md", "w")
    [ file.write("\n" + line) for line in plane_data.airspeed() ]
    file.close()

    file = open("limits.md", "w")
    [ file.write("\n" + line) for line in plane_data.parse_info("limits") ]
    file.close()

def django_store():
    pass


gen_markdown_logs()