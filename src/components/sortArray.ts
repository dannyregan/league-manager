// THIS WILL SORT ARRAYS FOR THE LEAGUE STANDINGS AND TOP SCORERS AND ROSTER.
export const sortArray = (array) => {
    return array.sort((a, b) => a.rank - b.rank);
}