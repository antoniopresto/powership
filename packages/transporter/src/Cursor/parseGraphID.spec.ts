import { joinCursorID } from './joinCursorID';
import { parseCursorID } from './parseCursorID';

describe('parseCursorString', () => {
  // afterEach();

  test('concatenating', () => {
    const profileObject = {
      PK: ['antoniopresto', 'A123'],
      SK: ['B456'],
      entity: 'Profile',
      name: 'PK',
    };

    const profile = joinCursorID(profileObject);

    expect(profile).toEqual('profile⋮PK⋮antoniopresto∙A123⋮B456⋮');

    const profileParsed = parseCursorID(profile);

    expect(profileParsed).toEqual({
      ...profileObject,
      PKPartOpen: 'profile⋮PK⋮antoniopresto∙A123',
      PKPart: 'profile⋮PK⋮antoniopresto∙A123⋮',
      SKPart: 'B456',
      cursor: profile,
      entity: profileObject.entity.toLowerCase(),
      parent: null,
    });

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

    const contactParsed = parseCursorID(contact);

    const { relatedTo, ...contactExpect } = contactObject;

    expect(contactParsed).toEqual({
      ...contactExpect,
      PKPartOpen: 'profile⋮PK⋮antoniopresto∙A123⋮B456⋮contacttype⋮U7890',
      PKPart: 'profile⋮PK⋮antoniopresto∙A123⋮B456⋮contacttype⋮U7890⋮',
      SKPart: 'email',
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
      PKPartOpen:
        'profile⋮PK⋮antoniopresto∙A123⋮B456⋮contacttype⋮U7890⋮email⋮contactstatus⋮CONTACT_STATUS',
      PKPart:
        'profile⋮PK⋮antoniopresto∙A123⋮B456⋮contacttype⋮U7890⋮email⋮contactstatus⋮CONTACT_STATUS⋮',
      SKPart: '',
      entity: contactStatusParsed.entity.toLowerCase(),
      cursor: contactStatus,
      parent: contactParsed,
      parentCursor: contact,
    });

    const keyInKeyObject = {
      PK: ['kink', profile],
      SK: [],
      entity: 'Kinkies',
      name: '_id',
    };

    const keyInKey = joinCursorID(keyInKeyObject);

    expect(keyInKey).toEqual(
      `kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮⋮`
    );

    const kinkParsed = parseCursorID(keyInKey);

    expect(kinkParsed).toEqual({
      PK: ['kink', 'profile⦙PK⦙antoniopresto⦁A123⦙B456⦙'],
      SK: [],
      cursor: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮⋮',
      entity: 'kinkies',
      PKPartOpen: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙',
      PKPart: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮',
      SKPart: '',
      name: '_id',
      parent: null,
    });
  });
});
