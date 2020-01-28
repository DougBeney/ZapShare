//; -*- mode: rjsx;-*-
/** @jsx jsx */
import { jsx } from 'theme-ui';

import { faChalkboard, faChalkboardTeacher, faUser } from '@fortawesome/free-solid-svg-icons';
import { Container } from '@theme-ui/components';
import { Fragment, useState, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import 'react-toggle/style.css';

import { useDispatch, useRecordingState } from '../../../recording-context';

import Notification from '../../notification';

import { stopCapture } from '../capturer';
import { ActionButtons, Tab, Tabs, TabPanel } from '../elements';

import DisplayAndUserMedia from './display-and-user-media';
import DisplayMedia from './display-media';
import UserMedia from './user-media';

export default function VideoSetup(props) {
  const { t } = useTranslation();

  const dispatch = useDispatch();
  const state = useRecordingState();
  const { displayStream, userStream, displaySupported, userSupported } = state;

  const hasStreams = displayStream || userStream;
  const anySupported = displaySupported || userSupported;
  const bothSupported = displaySupported && userSupported;

  const BOTH = 'both';
  const DISPLAY = 'display';
  const USER = 'user';

  const tab =
    (displayStream && userStream && BOTH) ||
    (displayStream && DISPLAY) ||
    (userStream && USER) ||
    (bothSupported && BOTH) ||
    (displaySupported && DISPLAY) ||
    (userSupported && USER);
  const [activeTab, setActiveTab] = useState(tab);

  const handleTabChange = useCallback(
    (event, value) => {
      stopCapture(state, dispatch);
      setActiveTab(value);
    },
    [dispatch, state]
  );

  const chooseAudioSources = useCallback(() => {
    props.nextStep();
  }, [props]);

  const tabContentStyle = {
    display: 'flex',
    flexDirection: 'column',
    flex: '0 1 auto',
    minHeight: 0
  };

  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 1 auto',
        minHeight: 0,
        pt: 3
      }}
    >
      {bothSupported && (
        <Tabs onChange={handleTabChange} value={activeTab}>
          <Tab
            icon={faChalkboardTeacher}
            label={t('sources-scenario-display-and-user')}
            value={BOTH}
          />
          <Tab icon={faChalkboard} label={t('sources-scenario-display')} value={DISPLAY} />
          <Tab icon={faUser} label={t('sources-scenario-user')} value={USER} />
        </Tabs>
      )}

      {!anySupported ? (
        <Notification isDanger>{t('studio-without-streams')}</Notification>
      ) : (
        <Fragment>
          <TabPanel value={BOTH} index={activeTab} sx={tabContentStyle}>
            <DisplayAndUserMedia />
          </TabPanel>

          <TabPanel value={DISPLAY} index={activeTab} sx={tabContentStyle}>
            <DisplayMedia />
          </TabPanel>

          <TabPanel value={USER} index={activeTab} sx={tabContentStyle}>
            <UserMedia />
          </TabPanel>
        </Fragment>
      )}

      <ActionButtons next={{ onClick: chooseAudioSources, disabled: !hasStreams }} />
    </Container>
  );
}