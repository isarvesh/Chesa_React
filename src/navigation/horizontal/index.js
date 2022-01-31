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

// ** Merge & Export
export default [...dashboards, ...departments, ...insurance, ...enquiry, ...expense, ...notice, ...communication, ...analytics, ...staffmanagement, ...stockmanagement, ...settings,  ...website]
