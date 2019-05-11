function biodata() {
    let data = {
        name:'Dika Muharman',
        address:'depok',
        hobbies:['belajar','bermain game'],
        is_married:false,
        school:{
            highSchool:'smk wisata indonesia',
            university:false
        },
        skills:[
            {league:'javascript',level:'newbie'},
            {league:'php',level:'beginner'},            
        ]
    };
    return JSON.stringify(data);
}
console.log(biodata());