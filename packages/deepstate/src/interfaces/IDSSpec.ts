import { createState } from '../DeepState';

const d1 = createState(
  'd1',
  {
    namessss: 'string',
  },
  () => ({ namessss: '' })
);

export const u = createState(
  'u',
  {
    userId: 'string',
    name: 'string',
    address: {
      object: {
        street: 'string',
      },
    },
    x: d1,
  },
  () => ({} as any)
);
// .resolvers(({ resolver }) => {
//   return {
//     address: resolver(
//       { street: 'string' },
//       { object: { street: '[string]' } }
//     ).resolve((root, args) => {
//       return {
//         ...root.address,
//         street: [args.street],
//       };
//     }),
//
//     numbers: resolver({}, { object: { count: 'int' } }).resolve(() => ({
//       count: 1,
//     })),
//   };
// })
// .methods(({ resolver }) => {
//   return {
//     login: resolver({}, { object: { street: 'string' } }).resolve(
//       async () => {
//         return { street: 'one' };
//       }
//     ),
//   };
// });

u.get('address').street[0].length;

// u.get('numbers').count.toFixed();
//
u.get('x').namessss.length;

// u.call('login', {}).then((res) => {
//   console.log(res.street);
// });

// const address = UserStt.get('address')
//   .methods((ds) => {
//     return {
//       changeName: ds.method({ name: 'string' }, async ({ args, ctx }) => {
//         if (!ctx.userId) return null;
//
//         const old = ds.get('name');
//         await ds.set('name', args.name);
//
//         return {
//           name: args.name,
//           old,
//           updatedAt: Date.now(),
//         };
//       }),
//     };
//   });
//
// s.set((c) => {
//   c.name = 'antonio';
// });
//
// const server = {} as any;
// const services = {} as any;
// const reactHooksPlugin = {} as any;
//
// server.on('request', (request) => {
//   const localSubscription = (request.context = s.context(request));
//
//   localSubscription.will('change', 'name', async () => {
//     localSubscription.set('lastChangedNameBy', request.userId);
//   });
//
//   request.will('close', () => localSubscription.release());
// });
//
// s.pick('address').will('submit', (address, ctx) => {
//   if (ctx.user.id === address.userId) return;
//   ctx.close(new Error('NotAuthorized'));
// });
//
// const address = s.pick('address').with(reactHooksPlugin);
//
// address.on('change', (value, ctx) => {
//   console.log(`${ctx.author.userId} changed their address`);
// });
//
// const street = address.useValue((c) => c.street);
// console.log(street);
//
// s.call('changeName', {
//   name: 'Antonio',
// });
//
// // global listener
// s.on('called', 'changeName', ({ name, updatedAt, old }, ctx) => {
//   services.logs.save(
//     `${ctx.author.username} changed their name from ${old} to ${name} at ${updatedAt}`
//   );
// });
