const validation = {
  email: (emailAddress) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(emailAddress);
  },
  username: (username) => {
    const re = /^(?!_)([a-zA-Z0-9_]){4,}$/;
    return re.test(username);
  }
}

export default validation;