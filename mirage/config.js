export default function () {
  this.namespace = 'api';

  this.get('/rooms', (schema) => schema.rooms.all());

  this.get('/rooms/:room_id', (schema, request) =>
    schema.rooms.find(request.params.room_id)
  );
}
