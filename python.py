import subprocess


papa_came = False

while not papa_came:
    a = str(subprocess.check_output(["ping", "192.168.29.229"]))
    a = a.split("\\n")
    if "Reply" in a[2].split(" "):
        papa_came = True


print("PAPA CAME")