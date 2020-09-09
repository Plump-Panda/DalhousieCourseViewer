from bs4 import BeautifulSoup
import requests
import json
import re


page1 = "https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule?s_term=202110&s_subj=CSCI&s_district=All"
page2 = "https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule?s_term=202110&s_crn=&s_subj=CSCI&s_numb=&n=21&s_district=All"
page3 = "https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule?s_term=202110&s_crn=&s_subj=CSCI&s_numb=&n=41&s_district=All"
page4 = "https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule?s_term=202110&s_crn=&s_subj=CSCI&s_numb=&n=61&s_district=All"
pages = [page1] #just for testing
#pages = [page1,page2,page3,page4]

courses = []
courseDescriptionLinks = []
times = []
courseNameFile = open("courses.txt","a")

#Will scrape the academic time table
for i in pages:
    page = requests.get(i)
    print("Getting page")
    if page.status_code != 200:
        print("Error scrapping",i)

    soup = BeautifulSoup(page.text, "html.parser")
    courseTable = soup.find_all(class_="dataentrytable")
    courseName = soup.find_all(class_='detthdr')
    tbody = soup.find_all('tr',{"valign":"middle"})
    #print(courseDescription)
    for a in soup.find_all('a', href=True):

        link = str(a['href'])
        if(link[0:15] == 'http://academic'):
            courseDescriptionLinks.append(link)
        

    # for i in tbody:
    #     nextRow = i.findNext('tr')
    #     time = nextRow.findChildren()[19]
    #     print(time)
    # print(tbody)
    # for x in range(0,len(tbody)):
    #     print(tbody[x].findNext('tr'))
    #time = soup.find_all(class_='dettl')
    #print(time[11], time[12])
    for x in range(0,len(courseName)):
        courses.append(courseName[x].find_all('b'))
        #td_tag =
        #times.append(courseName[x].find_all('b').findNext('b'))
   # print(courseName)
    #counter = 11
    #for x in range(0,len(time)):
    #    if x != 0 and x+counter < len(time):
    #        times.append(time[x+counter])
    #    else:
    #        times.append(time[x])
    #for string in soup.strings:
    #    print(repr(string))


#print(courses)
#print(courseDescription)
for i in courses:
    courseNameFile.write(i[0].getText())
    courseNameFile.write("\n")
courseNameFile.close()

#print(courseDescriptionLinks)



#Will scrape the course description websites
for i in range(0,len(courseDescriptionLinks)):
    page = requests.get(courseDescriptionLinks[i])
    print("Getting Description page")
    if page.status_code != 200:
        print("Error scrapping",i)

    soup = BeautifulSoup(page.text, "html.parser")
    #print(soup)
    mainContent = soup.find(class_='maincontent')
    b = mainContent[0].find_all('br')
    print(b)


#We want to export everything in a json file to make it easier
#for our web server to handle

data = {}
data['course'] = []
# for i in courses:
#     data['course'].append({
#         'name': i[0].getText()[10:-1]+i[0].getText()[-1],
#         'code': i[0].getText()[0:9], #this includes the 'CSCI', may want to remove that in the future and just have the number
#     })

# with open('../src/data/data.json', 'w') as outfile:
#     json.dump(data,outfile)

#This is what we think the final json should look like
#data['course'].append({
#    'name': 'name',
#    'code': 'code',
#    'days': ['M','F'],
#    'capacity': '78%',
#    'time': 'time'
#})