var user = function (fn,ln,pwd,email,regat){
	//{fn:'Xianjian', ln:'Bao', password:'123456', email:'baoxianjian@gmail.com', 
	this.fn = fn;
	this.ln = ln;
	this.password=pwd;
	this.email = email;
	this.regat = regat;
}

var post = function(title,pic,type,status,key_time,location,desc,pubat)
{
	this.uuid;
	this.title = title;
	this.picture = pic;
	this.type = type;
	this.status = status;
	this.key_time = key_time;
	this.location = location;
	this.desc = desc;
	this.pubat = pubat;
}

var comment = function(email,p_uuid, comment, pubat)
{
	this.email = email;
	this.p_uuid = p_uuid;
	this.comment = comment;
	this.pubat = pubat;
}



/*

{fn:'Xianjian', ln:'Bao', password:'123456', email:'baoxianjian@gmail.com', 
	posts:[
		{
			uuid:'xxxx',title:'xxx', type:0, status:0 , key_time:123456789, location:'Student Lounge of MUM', desc:'red pen', pubat:123456789, 
			comments:[{uuid:'xxxx',u_id:'xxxxxxxxxx',comment:'xxx', pubat:122345667}]
		}
	]
}
*/


module.exports.user = user;
module.exports.post = post;
module.exports.comment = comment;
