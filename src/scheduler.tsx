import React, { useState } from 'react';
import Calendar from './components/ui/calendar';
import Button from './components/ui/button';
import Input from './components/ui/input';
import Textarea from './components/ui/textarea';
import Label from './components/ui/label';
import './styles.css'; // Importing the CSS file

export default function SchedulerForm() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [eventTitle, setEventTitle] = useState('');
  const [attendees, setAttendees] = useState('');
  const [notes, setNotes] = useState('');

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', { date, eventTitle, attendees, notes });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Schedule Your Event</h1>
        <p>Select a date and provide event details</p>
      </div>
      <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleDateSelect}
            className="rounded-md border border-[#cbbba4]"
          />
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-group">
            <Label htmlFor="eventTitle">Event Title</Label>
            <Input
              id="eventTitle"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              placeholder="e.g., Wedding Consultation"
              required
            />
          </div>
          <div className="form-group">
            <Label htmlFor="attendees">Number of Attendees (Optional)</Label>
            <Input
              id="attendees"
              value={attendees}
              onChange={(e) => setAttendees(e.target.value)}
              placeholder="e.g., 50"
              type="number"
            />
          </div>
          <div className="form-group">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Any specific requests or requirements?"
              rows={4}
            />
          </div>
          <Button type="submit">Proceed to Payment</Button>
        </form>
      </div>
    </div>
  );
}
