export const filter = (arr, field, searchTerm) => {
    const basicFilter = arr.filter((item) => {
      if(field === "email" || field === "username") {
          return item[field] !== null && item[field] !== undefined && item[field] !== "" && item[field] !== [];
      } else if(field === "address" || field === "name" || field === "dob")  {
          return item.profile[field] !== null && item.profile[field] !== undefined && item.profile[field] !== "" && item.profile[field] !== [];
      }
    });

    return basicFilter;
}
