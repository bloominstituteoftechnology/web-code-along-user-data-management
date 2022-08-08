export const splitData = (arr) => {
  const newArr = [...arr];
  const goodData = [];
  const badData = [];

  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i][key] === null || newArr[i][key] === undefined || newArr[i][key] === "") {
      badData.push(newArr[i]);
    } else {
      goodData.push(newArr[i]);
    }
  }
  
  return [...goodData, ...badData];
};

export const sortByUsername = (arr) => {
  const newArr = [...arr];
  
  const sorter = newArr.sort((a, b) => {
    let usernameA = a.username;
    let usernameB = b.username;

    if (usernameA < usernameB) {
      return -1;
    } else if (usernameA > usernameB) {
      return 1;
    } else return 0;
  });

  return sorter;
};

export const sortByLastName = (arr) => {
  const newArr = [...arr];

  const sorter = newArr.sort((a, b) => {
    const lNameA = a.profile.name.split(" ")[1].trim();
    const lNameB = b.profile.name.split(" ")[1].trim();

    if (lNameA < lNameB) {
      return -1;
    } else if (lNameA > lNameB) {
      return 1;
    } else return 0;
  });

  return sorter;
};

export const sortByDOB = (arr) => {
  const newArr = [...arr];

  const sorter = newArr.sort((a, b) => {
    const dobA = a.profile.dob;
    const dobB = b.profile.dob;

    if (dobA < dobB) {
      return -1;
    } else if (dobA > dobB) {
      return 1;
    } else return 0;
  });

  return sorter;
};

export const sortByState = (arr) => {
  const newArr = [...arr];

  const sorter = newArr.sort((a, b) => {
    const stateA = a.profile.address.split(",")[2].trim();
    const stateB = b.profile.address.split(",")[2].trim();

    if (stateA < stateB) {
      return -1;
    } else if (stateA > stateB) {
      return 1;
    } else return 0;
  });

  return sorter;
};

export const sortByEmail = (arr) => {
  const newArr = [...arr];

  const sorter = newArr.sort((a, b) => {
      const emailA = a.email.split("@")[0];
      const emailB = b.email.split("@")[0];

      if (emailA < emailB) {
        return -1;
      } else if (emailA > emailB) {
        return 1;
      } else return 0;
  });

  return sorter;
};

export const sortByKey = (arr, key) => {
  let returnVal;
  switch (key) {
    case "email":
      returnVal = sortByEmail(arr);
      break;
    case "username":
      returnVal = sortByUsername(arr);
      break;
    case "lastName":
      returnVal = sortByLastName(arr);
      break;
    case "dob":
      returnVal = sortByDOB(arr);
      break;
    case "state":
      returnVal = sortByState(arr);
      break;
    default:
      returnVal = arr;
      break;
  }

  return returnVal;
};
