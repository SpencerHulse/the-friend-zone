# the-friend-zone

# tenantively-maybe-probably

![license badge](https://img.shields.io/badge/license-MIT-brightgreen)

## Description

This is the back-end for a NoSQL social media-type app. It utilizes the MongoDB database with Mongoose. It also uses Express. The only other package is Luxon, which is used for the timestamps.

The controllers and routes are separated for clarity. The two models that are being worked with are User and Thought. User also refers to itself to get a friend's list, while there is a Reaction schema built into the Thought model for other users to react to thoughts.

For users, you can GET all, GET one, POST a new user, PUT (update) a user, and DELETE a user. You can also add (PUT) and remove (DELETE) friends.

For thoughts, you can GET all, GET one, POST a new thought, PUT (update) a thought, and DELETE a thought. You can also add (PUT) or remove (DELETE) reactions to thoughts.

Currently, there is no session data, so certain routes require a body input of username and userId through Insomnia. Additionally, because of that, thoughts build up on a User, even when deleted. However, when a user is deleted, all the thoughts on the account are also deleted using deleteMany in the user DELETE route.

If you want to see the project in action, check out the [demonstration video](https://drive.google.com/file/d/1BKftNH3NET-ekMLbBgu78tKfFpOULF_U/view).

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation

To install this project, simply clone the repo and install the packages using your console.

## Usage

The only way to use this project currently is through a program like Insomnia to directly interact with the routes.

## License

This project is covered under the following license:

[MIT](https://www.mit.edu/~amini/LICENSE.md)

## Contributing

The project is not accepting any contributions at this time.

## Questions

If you have any questions, feel free to contact me. Thanks!

Email: hulse.spencer@gmail.com

GitHub: [SpencerHulse](https://github.com/SpencerHulse)
