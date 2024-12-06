let btnDaily = document.getElementById('btn-daily');
let btnWeekly = document.getElementById('btn-weekly');
let btnMonthly = document.getElementById('btn-monthly');


let timeWork = document.getElementById('time-work');
let prevWork = document.getElementById('prev-work');
let timeExercise = document.getElementById('time-exercise');
let prevExercise = document.getElementById('prev-exercise');
let timePlay = document.getElementById('time-play');
let prevPlay = document.getElementById('prev-play');
let timeSocial = document.getElementById('time-social');
let prevSocial = document.getElementById('prev-social');
let timeStudy = document.getElementById('time-study');
let prevStudy = document.getElementById('prev-study');
let timeSelfCare = document.getElementById('time-selfcare');
let prevSelfCare = document.getElementById('prev-selfcare');


async function loadTrackerData() {
    const response = await fetch('./data/data.json');
    const trackerData = await response.json();
    return trackerData;
  } 



async function updateTracker(timePeriod) {
  const data = await loadTrackerData();

  const trackerDetails = {
    work: data[0].timeframes[timePeriod],
    play: data[1].timeframes[timePeriod],
    study: data[2].timeframes[timePeriod],
    exercise: data[3].timeframes[timePeriod],
    social: data[4].timeframes[timePeriod],
    selfcare: data[5].timeframes[timePeriod],
  };

 
  timeWork.textContent = `${trackerDetails.work.current}hrs`;
  prevWork.textContent = `Last ${getTimePeriodLabel(timePeriod)} - ${trackerDetails.work.previous}hrs`;

  timePlay.textContent = `${trackerDetails.play.current}hrs`;
  prevPlay.textContent = `Last ${getTimePeriodLabel(timePeriod)} - ${trackerDetails.play.previous}hrs`;

  timeStudy.textContent = `${trackerDetails.study.current}hrs`;
  prevStudy.textContent = `Last ${getTimePeriodLabel(timePeriod)} - ${trackerDetails.study.previous}hrs`;

  timeExercise.textContent = `${trackerDetails.exercise.current}hrs`;
  prevExercise.textContent = `Last ${getTimePeriodLabel(timePeriod)} - ${trackerDetails.exercise.previous}hrs`;

  timeSocial.textContent = `${trackerDetails.social.current}hrs`;
  prevSocial.textContent = `Last ${getTimePeriodLabel(timePeriod)} - ${trackerDetails.social.previous}hrs`;

  timeSelfCare.textContent = `${trackerDetails.selfcare.current}hrs`;
  prevSelfCare.textContent = `Last ${getTimePeriodLabel(timePeriod)} - ${trackerDetails.selfcare.previous}hrs`;
}


function getTimePeriodLabel(period) {
  switch (period) {
    case 'daily':
      return 'day';
    case 'weekly':
      return 'week';
    case 'monthly':
      return 'month';
    default:
      return '';
  }
}

const buttons = document.querySelectorAll('.TBTNS button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        button.classList.add('active');
    });
});

btnDaily.addEventListener('click', () => updateTracker('daily'));
btnWeekly.addEventListener('click', () => updateTracker('weekly'));
btnMonthly.addEventListener('click', () => updateTracker('monthly'));