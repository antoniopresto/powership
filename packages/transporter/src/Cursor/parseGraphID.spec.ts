import { joinCursorID } from './joinCursorID';
import { parseCursorID } from './parseCursorID';

describe('parseCursorString', () => {
  // afterEach();

  describe('ngp', () => {
    test('ngp', () => {
      const profileObject = {
        PK: ['antoniopresto', 'A123'],
        SK: ['B456'],
        entity: 'Profile',
        name: 'PK',
      };

      const profile = joinCursorID(profileObject);

      expect(profile).toEqual('profile⋮PK⋮antoniopresto∙A123⋮B456⋮');

      const contactObject = {
        PK: ['U7890'],
        SK: ['email'],
        entity: 'ContactType',
        name: 'PK',
        relatedTo: 'Profile',
        parentCursor: profile,
      };

      const contact = joinCursorID(contactObject);

      expect(contact).toEqual(
        'profile⋮PK⋮antoniopresto∙A123⋮B456⋮contacttype⋮U7890⋮email⋮'
      );

      const profileParsed = parseCursorID(profile);

      expect(profileParsed).toEqual({
        ...profileObject,
        cursor: profile,
        entity: profileObject.entity.toLowerCase(),
        parent: null,
      });

      const contactParsed = parseCursorID(contact);

      const { relatedTo, ...contactExpect } = contactObject;

      expect(contactParsed).toEqual({
        ...contactExpect,
        entity: contactObject.entity.toLowerCase(),
        cursor: contact,
        parent: profileParsed,
        parentCursor: profile,
      });

      const contactStatusObject = {
        PK: ['CONTACT_STATUS'],
        SK: [],
        entity: 'ContactStatus',
        name: 'PK',
        relatedTo: 'ContactType',
        parentCursor: contact,
      };

      const contactStatus = joinCursorID(contactStatusObject);

      expect(contactStatus).toEqual(`${contact}contactstatus⋮CONTACT_STATUS⋮⋮`);

      const contactStatusParsed = parseCursorID(contactStatus);

      const { relatedTo: _, ...contactStatusExpect } = contactStatusObject;

      expect(contactStatusParsed).toEqual({
        ...contactStatusExpect,
        entity: contactStatusParsed.entity.toLowerCase(),
        cursor: contactStatus,
        parent: contactParsed,
        parentCursor: contact,
      });
    });
  });
});
