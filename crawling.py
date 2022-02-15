from bs4 import BeautifulSoup
import requests
import pandas as pd
import json 
from collections import OrderedDict

url = "https://search.naver.com/search.naver?sm=tab_hty.top&where=nexearch&query=%EC%95%84%EC%9D%B4%EC%9C%A0&oquery=%EB%84%A4%EC%9D%B4%EB%B2%84&tqi=hlrwSdp0YiRssjbeeYossssst3R-004963"

response = requests.get(url)
dom = BeautifulSoup(response.content, 'html.parser')

img = dom.select(".area_card .thumb_box img")
title = dom.select(".area_card strong a")
artist = dom.select(".area_card span:nth-child(2)")
date = dom.select(".area_card span:nth-child(3)")
link = dom.select(".area_card > a")

df = { "image" : [], "title" : [], "date":[], "link":[]}
n = 0

while len(df['title']) < 5:
    if artist[n].text == "아이유(IU)":
        df["image"].append(img[n].get("src"))
        df["title"].append(title[n].text)
        df["date"].append(date[n].text)
        df["link"].append(link[n].get("href"))

    n+=1

with open('data.json', 'w', encoding='utf-8') as make_file:
    json.dump(df, make_file, ensure_ascii=False, indent="\t")