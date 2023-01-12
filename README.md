# FA-Subtitle
**FA-Subtitle** is an api for download FA subtitle for **Movies** or **Tv-serises**
> **Note:** This api use **Worldsubtitle** website for found subtitles 

# Usage
## Get list of Movies or Serises
### Request
`GET /search?name=/`

    curl http://localhost:3001/api/v1/search?name={your sesarch query}

### Response
```json
[
  {
    "thumbnail": "Thumbnail.jpg",
    "title": "The Vikings 1958",
    "sendData": "11 Mar 15",
    "reviews": "0",
    "translators": "IMovie-DL",
    "formatSubtitle": "SRT",
    "versions": "WEB-DL-720p",
    "imdbLink": "https://www.imdb.com/title/tt0052365/",
    "subtitleLink": "/movies/the-vikings-1958/"
  },
  ...
]
```
## Get download link for movie
### Request
`GET /search?name=/`

    curl http://localhost:3001/api/v1/download?url={subtitleLink you get from search method}
### Response
```json
[
  {
    "name": "the-vikings-1958",
    "url": "DOWNLOAD LINK"
  }
]
```
### Get download link for tv-serise
### Request
`GET /download?url=/`

    curl http://localhost:3001/api/v1/download?url={subtitleLink you get from search method}
### Response
```json
[
  {
    "name": "chicago-pd",
    "seasons": [
      {
        "season": "فصل اول",
        "status": "تکمیل شده",
        "url": "DOWNLOAD LINK"
      },
      ...
    ]
  }
]
```
### License
[MIT](https://github.com/Epic-R-R/FA-Subtitle/blob/master/LICENSE)
