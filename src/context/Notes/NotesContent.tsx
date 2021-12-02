import React, { FC, useEffect } from 'react';
import { useNotes } from '.';

import { getNotes } from '../../services/NoteService';

const NotesContent: FC = ({ children }) => {
  const { initializeNotes } = useNotes();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getNotes();

        initializeNotes(data);
      } catch (err) {}
    };

    fetchData();
  }, [initializeNotes]);

  return <>{children}</>;
};

export default NotesContent;
