const {createClient} = require('@supabase/supabase-js')

module.exports = { //mimics client. In this case the client would be a browser
    connect(){
        return createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
    }
}