export const changeSiteName=(newSitename)=>{//אקשיין -אוביקט המכיל בקשה לשינוי סייטניים וסייטניים חדש
      return(
      {
        type: "CHANGE_SITE_NAME",
        payload: newSitename
      } 
   )
}

