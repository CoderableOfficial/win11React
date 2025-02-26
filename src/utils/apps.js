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
  icon: 'https://th.bing.com/th/id/R.1ca1fa90f9270aeeec64cfc22a9dc57f?rik=d9brDQt5LC0njg&riu=http%3a%2f%2fwww.clker.com%2fcliparts%2fb%2f7%2f3%2f5%2f1206564461883355622Rfc1394_Rubik_s_Cube.svg.hi.png&ehk=IrqqZfM%2fNsfPMraRap6IYVi%2fJhiASZG9C2nLiA8mq6o%3d&risl=&pid=ImgRaw&r=0',
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
