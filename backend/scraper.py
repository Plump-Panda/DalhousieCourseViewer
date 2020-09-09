from bs4 import BeautifulSoup
import requests
import json


page1 = "https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule?s_term=202110&s_subj=CSCI&s_district=All"
page2 = "https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule?s_term=202110&s_crn=&s_subj=CSCI&s_numb=&n=21&s_district=All"
page3 = "https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule?s_term=202110&s_crn=&s_subj=CSCI&s_numb=&n=41&s_district=All"
page4 = "https://dalonline.dal.ca/PROD/fysktime.P_DisplaySchedule?s_term=202110&s_crn=&s_subj=CSCI&s_numb=&n=61&s_district=All"
pages = [page1] #just for testing
#pages = [page1,page2,page3,page4]

courses = []
courseDescriptionLinks = []
courseDescription = []
creditHours = []
times = []

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
    
    #Gets the web link to the actual course page and description
    for a in soup.find_all('a', href=True):
        link = str(a['href'])
        if(link[0:15] == 'http://academic'):
            courseDescriptionLinks.append(link)
   
    #Gets the course names 
    for x in range(0,len(courseName)):
        courses.append(courseName[x].find_all('b'))

#Will scrape the course description websites
for i in range(0,len(courseDescriptionLinks)):
    page = requests.get(courseDescriptionLinks[i])
    print("Getting Description page")
    if page.status_code != 200:
        print("Error scrapping",i)

    soup = BeautifulSoup(page.text, "html.parser")
    mainContent = soup.find(class_='maincontent')

    #Gets the credit hours needed for the course
    getCreditHours = mainContent.find_all('br')
    creditHours.append(getCreditHours[0].next_sibling.strip())

    #Gets the course description
    courseDescription.append(getCreditHours[0].next_sibling.next_sibling.next_sibling.strip())
    


#We want to export everything in a json file to make it easier
data = {}
data['course'] = []
print("Creating json...")
for i in range(0,len(courses)):
    data['course'].append({
        'name': courses[i][0].getText()[10:-1]+courses[i][0].getText()[-1],
        'code': courses[i][0].getText()[0:9], #this includes the 'CSCI', may want to remove that in the future and just have the number
        'creditHours': creditHours[i],
        'description': courseDescription[i]
    })

with open('../src/data/data.json', 'w') as outfile:
    json.dump(data,outfile)
