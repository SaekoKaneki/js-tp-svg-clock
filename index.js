(function (){
    const oTime ={
        init(){
            this.iSecond;
            this.iMinute ;
            this.iHours;
            this.DegreSecond;
            this.DegreMinute;
            this.DegreHours;
            this.intervalID;
            this.intervalID = setInterval(()=>{
                    this. date = new Date;
                    this.iSecond  = this.date.getSeconds();
                    this.iMinute  = this.date.getMinutes();
                    this.iHours  = this.date.getHours();
                    this.DegreSecond = (this.iSecond/60)*360;
                    this.DegreMinute= ((this.iMinute/60)*360) + ((this.iSecond/60)/60)*360;
                    this.DegreHours = ((this.iHours/12)*360) + ((this.iMinute/60)/12)*360;
                    document.querySelector('#hours').setAttribute('transform',`rotate(${this.DegreHours} 16 17)`);
                    document.querySelector('#minutes').setAttribute('transform',`rotate(${this.DegreMinute} 16 17)`);
                    document.querySelector('#seconds').setAttribute('transform',`rotate(${this.DegreSecond} 16 17)`);
                    if (this.iHours>=12){
                        this.DegreHours-=360;
                    }
            },1000);
        }
    }
    oTime.init();
})();



