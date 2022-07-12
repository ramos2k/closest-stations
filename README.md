# Closest Stations

## API REST Created with: NodeJS, Express and MongoDB

### API Reference

#### Get all stations in service

```http
curl --request GET "https://closest-stations.vercel.app/"
```

#### Get closest stations in service

```http
  curl --request GET "https://closest-stations.vercel.app/stations?latitude=20.66633&longitude=-103.399683&km=2"
```

| Query parameter | Type | Required | Description |
| :-------- | :------- | :-------------------------------- | | :------- |
| `latitud` | `decimal` | **true** | Latitud example: **20.66633** |
| `longitude` | `decimal` | **true** | Longitude example: **-103.399683** |
| `km` | `int` | **false** | Define the distance in km that you want the stations to return, default value is equal to 1km |
