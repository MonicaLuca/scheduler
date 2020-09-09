# Interview Scheduler

Interciew Schheduler is a react application that allows users to book and cancel interviews. Users are able to navigate different days of the week to see avaliable or booked timeslots. When a user books a new appointment, they are able to fill in their name and select an interviewer of their choosing. User's may edit or cancel their previously booked appointments. Once an appointment is booked or cancelled, the slot avaliablity indicated in the side bar will update.  

## ScreenShots

### Scheduler Preview
!["Screenshot of Scheduler Preview"](https://github.com/MonicaLuca/scheduler/blob/master/docs/scheduler-preview.png?raw=true)

### Various appointment states including a booked appointment, creating new appointment, edititing an previously booked appointment, and deletion confirmation 
!["Screenshot of appointment states"](https://github.com/MonicaLuca/scheduler/blob/master/docs/scheduler-appointment-func.png?raw=true)

### Sidebar Day List changes based on spot avaliability
!["Screenshot of Day List spot count"](https://github.com/MonicaLuca/scheduler/blob/master/docs/scheduler-sidebar-update.png?raw=true)

## Dependencies

- Axios
- @testing-library/react-hooks
- React-test-renderer
- Node
- React
- Storybook
- Babel
- Jest
- Cypress

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
