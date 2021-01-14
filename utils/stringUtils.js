function slugify(title)
{
    /*
    i/p = this is my first article
    o/p = this-is-my-first-article
    */ 

   let slugarr = []

   for (let i = 0; i < title.length; i++) {
     if (i >= 30) break;
 
     let char = title[i].toLowerCase()
     if (char >= "a" && char <= "z") {
       slugarr.push(char)
     } else {
       slugarr.push("-")
     }
   }
   return slugarr.join('')
}


module.exports = slugify;