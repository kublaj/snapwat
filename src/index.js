import SWRegister from './swRegister';
import InputColour from './shared/inputColour';
import Audio from './shared/audio';

import HomePage from './pages/home';
import SavePage from './pages/save';
import SharePage from './pages/share';

SWRegister();
InputColour();
Audio();

HomePage.init();
SavePage.init();
SharePage.init();
