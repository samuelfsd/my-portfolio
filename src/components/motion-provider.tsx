'use client';

import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';

/** Disables transform/layout animations for users with `prefers-reduced-motion`. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
