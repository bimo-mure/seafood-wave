function Note({ currentNotes, handleNote, soldOut }) {
  return (
    <div className="my-2">
      <textarea
        id="message"
        rows="2"
        onMouseLeave={(e) => handleNote(e.target.value)}
        defaultValue={currentNotes}
        disabled={soldOut}
        className="block w-full rounded-lg border border-stone-300 bg-stone-100 p-2.5 text-sm text-stone-700 focus:border-red-500 focus:ring-red-500 "
        placeholder="Write your note here..."
      />
    </div>
  );
}

export default Note;
