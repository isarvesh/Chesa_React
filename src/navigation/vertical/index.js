// ** Navigation imports
import insurance from './insurance'
import communication from './communication'
import website from './website'
import dashboards from './dashboards'
import departments from './departments'
import enquiry from './enquiry'
import expense from './expense'
import notice from './notice'
import analytics from './analytics'
import staffmanagement from './staffmanagement'
import stockmanagement from './stockmanagement'
import settings from './settings'
import appointments from './appointments'
import apps from './apps'


// ** Merge & Export
export default [...dashboards, ...departments, ...appointments, ...apps, ...insurance, ...enquiry, ...expense, ...notice, ...communication, ...analytics, ...staffmanagement, ...stockmanagement, ...settings,  ...website]
