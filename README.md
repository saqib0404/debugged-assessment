# Debugged

[Live Link](https://mellow-malasada-766c2f.netlify.app/)

* The first bug was the importing of the coming soon component.
It was just exported as it was defined but was being imported with a different name.
So I added the 24th line on the coming soon component, exporting the function as default so that it can be imported as anyone wants.


* The counter Clock was showing a negative value and the count was increasing. So I changed the 18th line of counter.js slightly. Now it's showing that an update will be available on Jul 05, 2023. And It's counting the time.


* The Coming soon component was showing “follow us for update now”. It didn't make sense so I changed the text to “follow us for more updates!”


* The email validating function seemed weird in the validation form, so I changed it.
Now it is showing validation if there is any white space in the email, or if the email doesn't contain any alphabet (a-z), “@” character, or ”.” character.


* The server URL that was given was not working. So I created a simple node server and deployed it to vercel. Now the post request is handled by the server.


* In the hit toast function, the message argument seemed useless so I removed it.
I slightly modified it. Now it will show a success toast if the post request is successful.
And if an error occurs then it will show an error toast and throw an error.


