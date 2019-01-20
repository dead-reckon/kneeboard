import re
import pytz
from django.core.management.base import BaseCommand
from discord_hooks import *
from operation.models import *
import datetime 

# The class must be named Command, and subclass BaseCommand

class Command(BaseCommand):
    # Show this when the user types help
    help = "This Command Program is used to send notfications to Discord for flight operation events."

    def notify(self, op, notif, alert, time_diff):
        time_check = time_diff.total_seconds()
        tm_mission = ""

        # Static Images
        img_pb_brand = "https://s3.amazonaws.com/pointblanksite/stencil/PointBlankBrand.png"
        img_pbs_logo = "https://s3.amazonaws.com/pointblanksite/stencil/PointBlankText.png"
        img_pb_logo = "https://s3.amazonaws.com/pointblanksite/stencil/PointBlankLogo.png"
        img_green = "https://s3.amazonaws.com/pointblanksite/public/green.png"
        img_yellow = "https://s3.amazonaws.com/pointblanksite/public/yellow.png"
        img_orange = "https://s3.amazonaws.com/pointblanksite/public/orange.png"
        img_red = "https://s3.amazonaws.com/pointblanksite/public/red.png"

        d_name = op.b_name
        d_date = op.b_date
        d_sim = str(op.b_sim)
        d_type = op.b_type
        d_faction = str(op.b_faction)
        d_server = op.b_server
        d_url = op.b_url
        d_desc = op.b_desc
        b_note = op.b_note

        d_notfication = notif

        d_sim_logo = op.b_sim.sim_logo
        d_sim_banner = op.b_sim.sim_banner
        d_faction_logo = op.b_faction.faction_logo
        d_faction_banner = op.b_faction.faction_banner

        d_alert = alert
            
        print(b_note)

        if b_note in "Initial":

            if time_diff.total_seconds() < 0:
                tm_mission = "Now!"
            else:
                tm_mission = time_diff

            event = re.sub('\:[0-9][0-9]\+.*', '', str(d_date))
            embed = Webhook(d_notfication, color=123123)
            embed.set_title(title="Read the Briefing Here. ", url=d_url)
            embed.set_author(name='Operation: ' + d_name, icon=img_pb_brand)
            embed.add_field(name='Commander: ', value=0,inline=True)
            embed.add_field(name='Simulator: ', value=d_sim,inline=True)
            embed.add_field(name='Faction', value=d_faction,inline=True)
            embed.add_field(name='Type', value=d_type,inline=True)
            embed.add_field(name='Time to Event: ', value=str(tm_mission) ,inline=True)                
            embed.add_field(name='Server Name', value=d_server, inline=True)
    
            # embed.set_desc(d_desc)
            embed.set_thumbnail(d_faction_logo)
            embed.set_image(d_sim_banner)
            embed.set_footer(text='C2 Bot', icon=img_pb_brand,
                             ts=True)
            embed.post()

        if b_note in "24hr":

            if time_diff.total_seconds() < 86400:

                if time_diff.total_seconds() < 0:
                    tm_mission = "Now!"
                else:
                    tm_mission = time_diff

                event = re.sub('\:[0-9][0-9]\+.*', '', str(d_date))
                embed = Webhook(d_alert, color=123123)
                embed.set_title(title="Operation: " + d_name, url=d_url)
                embed.set_author(name='Code Green, Operation begins in: ' + str(tm_mission),
                                 icon=img_green)
                embed.set_desc("A operation is scheduled to start soon.  Click on the link above to learn more!")
                embed.add_field(name='Operation Begins', value=str(event) + " UTC", inline=True)
                embed.add_field(name='Operation C.O.', value=0, inline=True)
                embed.set_thumbnail(d_sim_logo)
                embed.set_footer(text='Command and Control Bot', icon=img_pb_brand,
                                 ts=True)
                embed.post()

        if b_note in "1hr":

            if time_diff.total_seconds() < 3600:

                if time_diff.total_seconds() < 0:
                    tm_mission = "Now!"
                else:
                    tm_mission = time_diff

                event = re.sub('\:[0-9][0-9]\+.*', '', str(d_date))
                embed = Webhook(d_alert, color=123123)
                embed.set_title(title="Operation: " + d_name, url=d_url)
                embed.set_author(name='Code Yellow, Operation begins in: ' + str(tm_mission),
                                 icon=img_yellow)
                embed.set_desc("A operation is scheduled to start soon.  Click on the link above to learn more!")
                embed.add_field(name='Operation Begins', value=str(event) + " UTC", inline=True)
                embed.add_field(name='Operation C.O.', value=0, inline=True)
                embed.set_thumbnail(d_sim_logo)
                embed.set_footer(text='Command and Control Bot', icon=img_pb_brand,
                                 ts=True)
                embed.post()

        if b_note in "15m":

            if time_diff.total_seconds() < 900:

                if time_diff.total_seconds() < 0:
                    tm_mission = "Now!"
                else:
                    tm_mission = time_diff

                event = re.sub('\:[0-9][0-9]\+.*', '', str(d_date))
                embed = Webhook(d_alert, color=123123)
                embed.set_title(title="Operation: " + d_name, url=d_url)
                embed.set_author(name='Code Orange, Operation begins in: ' + str(tm_mission),
                                 icon=img_orange)
                embed.set_desc("A operation is scheduled to start soon. Meet in staging chat! Click on the link above to learn more!")
                embed.add_field(name='Operation Begins', value=str(event) + " UTC", inline=True)
                embed.add_field(name='Operation C.O.', value=0, inline=True)
                embed.set_thumbnail(d_sim_logo)
                embed.set_footer(text='C2', icon=img_pb_brand,
                                 ts=True)
                embed.post()

        if b_note in "Final":

            if time_diff.total_seconds() < 0:

                if time_diff.total_seconds() < 0:
                    tm_mission = "Now!"
                else:
                    tm_mission = time_diff

                event = re.sub('\:[0-9][0-9]\+.*', '', str(d_date))
                embed = Webhook(d_alert, color=123123)
                embed.set_title(title="Operation: " + d_name, url=d_url)
                embed.set_author(name='Code Red, Operation has started!',
                                 icon=img_red)
                embed.set_desc("A operation has started, report to staging immediatly! Click on the link above to learn more!")
                embed.add_field(name='Operation Begins', value=str(event) + " UTC", inline=True)
                embed.add_field(name='Operation C.O.', value=0, inline=True)
                embed.set_thumbnail(d_sim_logo)
                embed.set_footer(text='C2 Bot', icon=img_pb_brand,
                                 ts=True)
                embed.post()

    def increment(self, op, time_diff):

        if op.b_note in "Initial":
            op.b_note = "24hr"
        elif op.b_note in "24hr":
            if time_diff.total_seconds() < 86400:
                op.b_note = "1hr"
        elif op.b_note in "1hr":
            if time_diff.total_seconds() < 3600:
                op.b_note = "15m"
        elif op.b_note in "15m":
            if time_diff.total_seconds() < 900:
                op.b_note = "Final"
        elif op.b_note in "Final":
            if time_diff.total_seconds() < 0:
                op.b_note = "Done"
                op.state=False
        op.save()

    # A command must define handle()
    def handle(self, *args, **options):
        blitzObj = Blitz.objects.all()
        for row in blitzObj:
            target_date=row.b_date
            future_date = target_date + datetime.timedelta(days=row.b_frequency)
            time_diff = target_date - pytz.utc.localize(datetime.datetime.now().replace(microsecond=0))
            

            print("\nTarget Date", target_date)
            print("Future Target", future_date)
            print("Time Difference", time_diff)

            if time_diff.total_seconds() < 0:
                target_date = future_date
                time_diff = target_date - pytz.utc.localize(datetime.datetime.now().replace(microsecond=0))
                print("Target date",target_date)


            print("Time Difference", time_diff)

            # if row.b_notif == True:
            #     squadObj = Squadron.objects.all()
            #     print("Performing notifications for all Squads.")
            #     for line in squadObj:
            #         print(line)
            #         alert = line.squad_general_alert
            #         if str(row.op_sim) == "IL2":
            #             alert = line.squad_il2_alert
            #         elif str(row.op_sim) == "DCS":
            #             alert = line.squad_dcs_alert
            #         else:
            #             pass
            #         self.notify(row, line.squad_notif, alert, time_diff)
            #     self.increment(row, time_diff)

            # else:
            #     print("Performing Squad Specific Notifications.")
            #     if str(row.b_sim) == "IL2":
            #         alert = row.b_squad.squad_il2_alert
            #     elif str(row.b_sim) == "DCS":
            #         alert = row.b_squad.squad_dcs_alert
            #     else:
            #         alert = line.squad_general_alert
            #     self.notify(row, row.b_squad.squad_notif, alert, time_diff)
            #     self.increment(row, time_diff)    