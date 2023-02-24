import React from 'react';
import Clock from './svgs/clock.svg';
import Calendar from './svgs/calendar.svg';
import Unlocked from './svgs/unlocked.svg';
import AvatarCircle from './svgs/avatar-circle.svg';
import TaskAdd from './svgs/task-add.svg';
import Logo from './svgs/logo.svg';

interface SvgParams {
  width: number;
  height?: number;
  color?: string;
}

interface Icons {
  commons: {
    [key: string]: any;
  };
  svgs: {
    [key: string]: (params: SvgParams) => JSX.Element;
  };
}

export const icons: Icons = {
  commons: {},
  svgs: {
    logo: (params: SvgParams) => (
      <Logo
        width={params.width}
        height={params.height ?? params.width}
        color={params.color ?? ''}
      />
    ),
    clock: (params: SvgParams) => (
      <Clock
        width={params.width}
        height={params.height ?? params.width}
        color={params.color ?? ''}
      />
    ),
    unlocked: (params: SvgParams) => (
      <Unlocked
        width={params.width}
        height={params.height ?? params.width}
        color={params.color ?? ''}
      />
    ),
    avatarCircle: (params: SvgParams) => (
      <AvatarCircle
        width={params.width}
        height={params.height ?? params.width}
        color={params.color ?? ''}
      />
    ),
    taskAdd: (params: SvgParams) => (
      <TaskAdd
        width={params.width}
        height={params.height ?? params.width}
        color={params.color ?? ''}
      />
    ),
    calendar: (params: SvgParams) => (
      <Calendar
        width={params.width}
        height={params.height ?? params.width}
        color={params.color ?? ''}
      />
    ),
  },
};
