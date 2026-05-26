import { useEffect, useState } from 'react';
import {
  collection, addDoc, updateDoc, deleteDoc,
  doc, onSnapshot, query, orderBy, Timestamp,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import type { ScheduleEvent, CheckIn } from '../types/schedule';

const EVENTS_COL = 'events';
const CHECKINS_COL = 'checkins';

export function useEvents() {
  const [events, setEvents] = useState<ScheduleEvent[]>([]);

  useEffect(() => {
    const q = query(collection(db, EVENTS_COL), orderBy('createdAt', 'desc'));
    return onSnapshot(q, (snap) => {
      setEvents(snap.docs.map((d) => ({ id: d.id, ...d.data() } as ScheduleEvent)));
    });
  }, []);

  const addEvent = (data: Omit<ScheduleEvent, 'id' | 'createdAt'>) =>
    addDoc(collection(db, EVENTS_COL), { ...data, createdAt: Timestamp.now().toMillis() });

  const updateEvent = (id: string, data: Partial<ScheduleEvent>) =>
    updateDoc(doc(db, EVENTS_COL, id), data);

  const deleteEvent = (id: string) => deleteDoc(doc(db, EVENTS_COL, id));

  return { events, addEvent, updateEvent, deleteEvent };
}

export function useCheckIns() {
  const [checkIns, setCheckIns] = useState<CheckIn[]>([]);

  useEffect(() => {
    const q = query(collection(db, CHECKINS_COL), orderBy('checkedAt', 'desc'));
    return onSnapshot(q, (snap) => {
      setCheckIns(snap.docs.map((d) => ({ id: d.id, ...d.data() } as CheckIn)));
    });
  }, []);

  const toggleCheckIn = async (eventId: string, date: string, existing?: CheckIn) => {
    if (existing) {
      await deleteDoc(doc(db, CHECKINS_COL, existing.id));
    } else {
      await addDoc(collection(db, CHECKINS_COL), {
        eventId,
        date,
        checkedAt: Timestamp.now().toMillis(),
      });
    }
  };

  return { checkIns, toggleCheckIn };
}
