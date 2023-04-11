# chatGPT4Friends
The chatGPT4Friends project consisted in using the API provided by openai in its latest version, I developed a friendly interface where the user can ask a question by using a chat, the message is sent by doing a POST in the api returning the information that the user requested. The project was developed under the React NextJs framework, it was my first time using this framework and I did my best, to style the chat I used Tailwind.

## Project Structure
In the folder "pages" you can find the folder "components" and "api", inside "components" is the file "Chat.jsx" inside is the logic used to take the data provided by the user and show the response of the artificial intelligence, inside the folder "api" you will find the file "Api. js" there is programmed in a simple way the way in which the POST is done, in addition to that I added to maintain the context of the whole conversation, that is to say, that it takes into account the messages sent previously so that the conversation is a little more real and in case the user wants to ask different questions of the same topic.

## How can I run the project? How do I get the openai APIKey?
To install the project you must first clone the repository.
git clone https://github.com/AndresSuarezz/chatGPT4Friends.git

Second, they should open the project in their text editor of preference and start the terminal, inside the terminal run the command:

```bash
npm install
```

When the installation is complete you can start the development server and test it, the command to start the development server is:

```bash
npm run dev
```

Note: in the Api.js file in line 4 you must put your apiKey provided by openai, please put in quotes "", to get your apikey you must go to the openai web site https://platform.openai.com/ , click on your logged in profile and go to "View API Keys" inside you can generate the corresponding apikey.

If you want to make contributions and annotations so that we can help each other it would be great.

Thank you very much for watching the little project :)
