import { connect } from 'mongoose';
import { DATABASE } from '../env'

let { mongodb } = DATABASE;

export default connect(mongodb.uri,{ useNewUrlParser: true })