const initState = {
  //משתנה דפולט
  photos: [],
  category: "sports",
  index: 1,
};

//פונקציה הבודקת אם השתנה רדיוסר במידה והשתנה משנה
const siteReducer = (state = initState, action) => {
  switch (action.type) {
    case "SET_PHOTOS":
      state = { ...state, photos: action.payload };
    case "SET_CATEGORY":
      state = { ...state, category: action.payload };
    case "SET__INDEX":
      state = { ...state, category: action.payload };
      break;
    default:
      break;
  }
  return state;
};

export default siteReducer;
