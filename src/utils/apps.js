export const gene_name = () => Math.random().toString(36).substring(2, 10).toUpperCase()

var installed = localStorage.getItem("installed")
if (!installed) installed = "[]"

installed = JSON.parse(installed)

var apps = [{
  name: 'Start',
  icon: 'home',
  type: 'action',
  action: 'STARTMENU'
},
{
  name: 'Search',
  icon: 'search',
  type: 'action',
  action: 'SEARCHMENU'
},
{
  name: 'Widget',
  icon: 'widget',
  type: 'action',
  action: 'WIDGETS'
},
{
  name: 'Settings',
  icon: 'settings',
  type: 'app',
  action: 'SETTINGS'
},
{
  name: 'File Explorer',
  icon: 'explorer',
  type: 'app',
  action: 'EXPLORER'
},
{
  name: 'Browser',
  icon: 'edge',
  type: 'app',
  action: 'MSEDGE'
},
{
  name: 'Store',
  icon: 'store',
  type: 'app',
  action: 'WNSTORE'
},
{
  name: 'Recycle Bin',
  icon: 'bin0',
  type: 'app'
},
{
  name: 'Coderable',
  icon: 'win/user',
  type: 'short'
}, {
  name: 'Alarms',
  icon: 'alarm',
  type: 'app'
},
{
  name: 'Calculator',
  icon: 'calculator',
  type: 'app',
  action: 'CALCUAPP'
},
{
  name: 'Calendar',
  icon: 'calendar',
  type: 'app'
},
{
  name: 'Camera',
  icon: 'camera',
  type: 'app',
  action: 'CAMERA'
},
{
  name: 'Your Phone',
  icon: 'yphone',
  type: 'app'
},
{
  name: 'Feedback',
  icon: 'feedback',
  type: 'app'
},
{
  name: 'Get Started',
  icon: 'getstarted',
  type: 'app',
  action: 'EXTERNAL',
  payload: 'https://projects.asylum-os.com/win11react-docs/'
},
{
  name: 'Groove Music',
  icon: 'groove',
  type: 'app'
},
{
  name: 'Help',
  icon: 'help',
  type: 'app',
  action: 'EXTERNAL',
  payload: 'https://projects.asylum-os.com/win11react-docs/'
},
{
  name: 'Yammer',
  icon: 'yammer',
  type: 'app'
},
{
  name: 'Mail',
  icon: 'mail',
  type: 'app',
  action: 'EXTERNAL',
  payload: 'mailto:contact@coderable.studio'
},
{
  name: 'Movies',
  icon: 'movies',
  type: 'app'
},
{
  name: 'Xbox',
  icon: 'xbox',
  type: 'app'
},
{
  name: 'Office',
  icon: 'msoffice',
  type: 'app'
},
{
  name: 'Narrator',
  icon: 'narrator',
  type: 'app'
},
{
  name: 'News',
  icon: 'news',
  type: 'app'
},
{
  name: 'Notepad',
  icon: 'notepad',
  type: 'app',
  action: 'NOTEPAD'
},
{
  name: 'Sticky Notes',
  icon: 'notes',
  type: 'app'
},
{
  name: 'OneDrive',
  icon: 'oneDrive',
  type: 'app'
},
{
  name: 'OneNote',
  icon: 'onenote',
  type: 'app'
},
{
  name: 'Outlook',
  icon: 'outlook',
  type: 'app'
},
{
  name: 'People',
  icon: 'people',
  type: 'app'
},
{
  name: 'Photos',
  icon: 'photos',
  type: 'app'
},
{
  name: 'PowerPoint',
  icon: 'powerpoint',
  type: 'app'
},
{
  name: 'Security',
  icon: 'security',
  type: 'app'
},
{
  name: 'Spotify',
  icon: 'spotify',
  type: 'app',
  action: 'SPOTIFY'
},
{
  name: 'Share',
  icon: 'share',
  type: 'app'
},
{
  name: 'Skype',
  icon: 'skype',
  type: 'app'
},
{
  name: 'Snipping Tool',
  icon: 'snip',
  type: 'app'
},
{
  name: 'Teams',
  icon: 'teams',
  type: 'app'
},
{
  name: 'Terminal',
  icon: 'terminal',
  type: 'app',
  action: 'TERMINAL'
},
{
  name: 'Tips',
  icon: 'tips',
  type: 'app'
},
{
  name: 'To Do',
  icon: 'todo',
  type: 'app'
},
{
  name: 'Maps',
  icon: 'maps',
  type: 'app'
},
{
  name: 'Voice Recorder',
  icon: 'voice',
  type: 'app'
},
{
  name: 'Weather',
  icon: 'weather',
  type: 'app'
},
{
  name: 'White Board',
  icon: 'board',
  type: 'app',
  action: 'WHITEBOARD'
},
{
  name: 'Cortana',
  icon: 'cortana',
  type: 'app'
},
{
  name: 'Github',
  icon: 'github',
  type: 'app',
  action: 'EXTERNAL',
  payload: 'https://github.com/The-Coderable'
},
{
  name: 'Rubiks',
  icon: 'data:image/jpeg;base64,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',
  type: 'action',
  action: 'EXTERNAL',
  payload: 'https://rubiks.coderable.studio'
},
{
  name: 'Discord',
  icon: 'discord',
  type: 'app',
  action: 'DISCORD',
}]

for (var i = 0; i < installed.length; i++) {
  installed[i].action = gene_name()
  apps.push(installed[i])
}

export default apps
