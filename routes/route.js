import express from 'express';
import { saveEmail,saveDraft,getEmails,moveEmailsToBin,toggleStarredEMails,deleteEmails} from '../controller/email-controller.js';

const routes = express.Router();

routes.post('/save', saveEmail);
routes.get('/emails/:type',getEmails);
routes.post('/save-draft',saveDraft);
routes.post('/bin', moveEmailsToBin);
routes.post('/starred', toggleStarredEMails);
routes.delete('/delete', deleteEmails)


export default routes;