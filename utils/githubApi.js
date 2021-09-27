const getGithubUser = async (user) => {
  try {
    const url = `${githubEndPoint}/${user}`;
    const resp = await axios.get(url);
    return true;
  } catch (err) {
    return false;
  }
};

module.exports = getGithubUser;
