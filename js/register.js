function formvalidation()
{
    var uid = document.registration.user_id;
    var passid = document.registration.pass_word;
    var conpass = document.registration.con_pass;
    var mailid = document.registration.email;

    if(userid_validation(uid,5,12)){}
    if(passid_validation(passid,7,12)){}
    if(conpass_validation(conpass,7,12)){}
    if(mailid_validation(mailid,20,30)){}

    if(userid_validation(uid,5,12) || passid_validation(passid,7,12) || conpass_validation(conpass,7,12) || mailid_validation(mailid,20,30))
    {
        window.location.href ="/completereg.html";
    }
    return false;
}

function userid_validation(uid,mx,my)
{
    var uid_len = uid.value.length;
    if(uid_len == 0 || uid_len >= my || uid_len < mx)
    {
        alert("Invalid User-ID");
        uid.focus();
        return false;
    }
    return true;
}

function passid_validation(passid,mx,my)
{
    var passid_len = passid.value.length;
    if(passid_len == 0 || passid_len >=my || passid_len < mx)
    {
        alert("Invalid Password");
        passid.focus();
        return false;
    }
    return true;
}

function conpass_validation(conpass,mx,my)
{
    var passid_len = conpass.value.length;
    if(passid_len == 0 || passid_len >=my || passid_len < mx)
    {
        alert("Password doesn't match");
        conpass.focus();
        return false;
    }
    return true;
}

function mailid_validation(mailid,mx,my)
{
    var mailid_len = mailid.value.length;
    if(mailid_len == 0 || mailid_len >= my || mailid_len < mx)
    {
        alert("Invalid Email-ID");
        mailid.focus();
        return false;
    }
    return true;
}