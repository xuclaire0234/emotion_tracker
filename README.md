# 2023 CMPUT 302 Emotional Tracking App

A simple react app that allows users to track & analyze their present or historical emotional data, as well as gain additional information about how to manage negative emotions.

# Contributors

- Adam Ahmed - avahmed@ualberta.ca
- Mahmoud Asadie - asadie@ualberta.ca
- Shihao Liu - shihao8@ualberta.ca
- Jingyi Xu - jx15@ualberta.ca
- Jason Sommerville - jns@ualberta.ca

# Original Repo

The original source code for this project can be found in GitHub here: https://github.com/adamva/CMPUT302-emotion-tracker

# Original Requirement

This app was originally based on the medium fidelity Final Prototype V2 here: https://www.figma.com/file/VMppaKTVgFpJoraWywzHSo/302-prototypes---medium-fidelity?node-id=90-744

However, it does not implement the proposed changes around the `graph` feature.

# Usage

## GitHub Pages

You can visit the GitHub pages of the original repo https://adamva.github.io/CMPUT302-emotion-tracker/ & you can interact with the app.

## Build Locally

Or you can build the source code locally by cloning the repo & running these commands:
```
cd ui
npm install
npm start
```
You should now be able to browse to `http://localhost:3000` & view the app.

## Features of the App

The app is inteded to be viewed on a mobile device & the data provided in the app (graphs, tips, etc) is fake data.

You can click the icons in the bottom navigation to browse the different features of the app.

- The `calendar` feature allows users to view their emotional history. 
  - Users can click a specific day to be lead to the `graph` feature for that day.
  - Another feature include are the `definition` which give users a quick way to learn about negative emotions and their common symptoms.
  - As well, users can click `start generate` to begin selecting a `start date` and `end date` in the `calendar` & generate a custom `pie chart summary` of thier emotions from the duration choosen.
- The `tips` features provides additional information about specific emotions & how to improve themselves. User can drag through the `tabs` at the top to view info about specific emotions.
  - Each tip has a `learn more` button that leads the user to additional web information
  - As well, there is a `share` button that allows users to either share a specific tip through twitter or email.
- The `graph` feature displays a user's emotional data over the span of the day & allows users to change the active emotion highligheted, which emotions to graph, and the location users were present when they were feeling certain emotions.
- The `settings` feature allows user to adjust the app's features
  - The `language` section allows user to change the systems default language
  - The `voice mode` section enables text-to-speach
  - The `emotion color swatch` section allows users to change the colors of the emotion they represent
    - At the bottom there is a `reset pallete to defaults` button that resets the emotions to their respective default colors.
