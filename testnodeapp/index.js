const axios = require('axios');
const sleep = require('sleep-promise');
const shell = require('shelljs')

async function get() {
  while(true){
    try{
       const { data } = await axios.get('http://169.254.169.254/metadata/instance?api-version=2021-02-01', {headers: {'Metadata':'true'}, timeout:5000})
       console.log(JSON.stringify(data));
    }catch(e){ console.log(JSON.stringify(e)); }

    try{
       const s = shell.exec('./getenv.sh', {async: true, silent: true});
       s.stdout.on('data', function(data) {
         console.log(JSON.stringify(data));
         //console.log(data);
       });
    }catch(e){ console.log(e); }
    await sleep(1000);
  }
}
get();
