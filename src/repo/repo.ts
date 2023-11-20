// Export interface Repository<X extends { id: unknown }> {
//   loadAll(): Promise<X[]>;
//   loadThingById(_id: X['id']): Promise<X>;
//   createThing(_newItem: Omit<X, 'id'>): Promise<X>;
//   updateThing(_id: X['id'], _updatedItem: Partial<X>): Promise<X>;
//   deleteThing(_id: X['id']): Promise<void>;
// }
