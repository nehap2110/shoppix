class APIFunctionality{
    constructor(query,querystr){
        this.query = query,
        this.querystr = querystr
    }

    search(){
        const keyword = this.querystr.keyword?{
            name :{
                $regex:this.querystr.keyword,
                $options:'i' //means it is case insensitive
            }
        }:{}

        console.log(keyword)
        this.query = this.query.find({...keyword})
        return this;
    }

    filter(){
        const querycopy = {...this.querystr}
        console.log(querycopy);
        const removeFields = ["keyword","page","limit"]
        removeFields.forEach(key => delete querycopy[key])
        console.log(querycopy)

        this.query = this.query.find(querycopy)
        return this
    }
}

export default APIFunctionality;