console.log(new Intl.DateTimeFormat('en-US', {
  dateStyle: 'full', 
  timeZone: 'America/Chicago',
  timeStyle: 'long' })
    .format(Date.now()
));
