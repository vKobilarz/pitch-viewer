# Pitch Viewer

On this App, you can view the notes you are playing with your guitar. It captures the sound by your microphone, gets its frequency and displays it on the website.

![image](https://user-images.githubusercontent.com/44646469/145049045-2a3ade41-a4c3-489c-ab00-8522601af42a.png)


## To Start

 - First, you need to install the project dependencies: `npm install`;
 - You will also need the `json-server` installed globally: `npm install -g json-server`;
 - Then, you should start the server with: `json-server --watch db.json --port 3030`;
 - Finally, you can start it by using: `npm start`;

## Upcoming Features

 - More Instruments!
 - Scales! You might choose a scale and all its notes will be highlighted on the fretboard.
 - Notes history, after choosing a tempo, you will have a timeline of your notes played on the last 30 seconds.
 - Automatic Scales! With scales and notes history implemented, it is possible te determine which scale your music is, changing it automatically.

---

This project was created the test an HOC architecture with contexts on React. Using the instrument context as an example, it is following the structure:

![image](https://user-images.githubusercontent.com/44646469/145051992-7e5516e2-8e40-4a82-9152-2906b4a53576.png)

 - On `InstrumentContext`, we have all atributes and functions that are common to all instruments. `instrumentLines` is an example, which is an array with the first note and the length of their line.
 - `GuitarContent` and `BassContent` is responsible to fetch data of their instruments and initialize the `InstrumentContext`.
 - `withGuitar` adn `withBass` is a HOC that receives a component and wraps it with the `InstrumentProvider` and matching `Content`.
 - Finally, the `Instrument` is a generic component that gets the `instrumentLines` from `InstrumentContext` and renders them on the freatboard.
