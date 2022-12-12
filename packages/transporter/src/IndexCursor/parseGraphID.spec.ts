import { joinIndexCursor } from './joinIndexCursor';
import { parseIndexCursor } from './parseIndexCursor';

describe('parseCursorString', () => {
  // afterEach();

  const config = { destination: 'document' } as const;
  test('concatenating', () => {
    const profileObject = {
      PK: ['antoniopresto', 'A123'],
      SK: ['B456'],
      entity: 'Profile',
      name: 'PK',
    };

    const profile = joinIndexCursor(profileObject, config);

    expect(profile).toEqual('profile⋮PK⋮antoniopresto∙A123⋮B456⋮');

    const profileParsed = parseIndexCursor(profile, config);

    expect(profileParsed).toEqual({
      PKFieldName: 'PK',
      PKPart: 'profile⋮PK⋮antoniopresto∙A123⋮',
      PKPartOpen: 'profile⋮PK⋮antoniopresto∙A123',
      SKFieldName: 'SK',
      SKPart: 'B456',
      cursor: 'profile⋮PK⋮antoniopresto∙A123⋮B456⋮',
      entity: 'profile',
      filter: {
        PK: 'profile⋮PK⋮antoniopresto∙A123⋮',
        SK: 'B456',
        _id: 'profile⋮PK⋮antoniopresto∙A123⋮B456⋮',
      },
      name: 'PK',
      parentPrefix: null,
      relatedTo: null,
    });

    const contactObject = {
      PK: ['U7890'],
      SK: ['email'],
      entity: 'ContactType',
      name: 'PK',
      relatedTo: 'Profile',
    };

    const contact = joinIndexCursor(contactObject, config);

    expect(contact).toEqual('profile⋮PK⋮U7890⋮contacttype⋮email⋮');

    const contactParsed = parseIndexCursor(contact, config);

    expect(contactParsed).toMatchObject({
      PKFieldName: 'PK',
      PKPart: 'profile⋮PK⋮U7890⊰contacttype⋮',
      PKPartOpen: 'profile⋮PK⋮U7890⊰contacttype',
      SKFieldName: 'SK',
      SKPart: 'email',
      cursor: 'profile⋮PK⋮U7890⊰contacttype⋮email⋮',
      entity: 'contacttype',
      filter: {
        PK: 'profile⋮PK⋮U7890⊰contacttype⋮',
        SK: 'email',
        _id: 'profile⋮PK⋮U7890⊰contacttype⋮email⋮',
      },
      name: 'PK',
      parentPrefix: 'profile⋮PK⋮U7890⊰',
      relatedTo: 'profile',
    });

    const contactStatusObject = {
      PK: ['U888'],
      SK: ['CONTACT_STT_SK'],
      entity: 'ContactStatus',
      name: 'PK',
      relatedTo: 'ContactType',
    };

    const contactStatus = joinIndexCursor(contactStatusObject, config);

    expect(contactStatus).toEqual(
      `contacttype⋮PK⋮U888⋮contactstatus⋮CONTACT_STT_SK⋮`
    );

    const contactStatusParsed = parseIndexCursor(contactStatus, config);

    expect(contactStatusParsed).toMatchObject({
      PKPart: 'contacttype⋮PK⋮U888⊰contactstatus⋮',
      PKPartOpen: 'contacttype⋮PK⋮U888⊰contactstatus',
      SKPart: 'CONTACT_STT_SK',
      cursor: 'contacttype⋮PK⋮U888⊰contactstatus⋮CONTACT_STT_SK⋮',
      entity: 'contactstatus',
      name: 'PK',
      parentPrefix: 'contacttype⋮PK⋮U888⊰',
      relatedTo: 'contacttype',
    });

    const keyInKeyObject = {
      PK: ['kink', profile],
      SK: [],
      entity: 'Kinkies',
      name: '_id',
    };

    const keyInKey = joinIndexCursor(keyInKeyObject, config);

    expect(keyInKey).toEqual(
      `kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮⋮`
    );

    const kinkParsed = parseIndexCursor(keyInKey, config);

    expect(kinkParsed).toMatchObject({
      PKPart: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮',
      PKPartOpen: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙',
      SKPart: '',
      cursor: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮⋮',
      entity: 'kinkies',
      name: '_id',
      parentPrefix: null,
      relatedTo: null,
    });
  });  test('concatenating', () => {
    const profileObject = {
      PK: ['antoniopresto', 'A123'],
      SK: ['B456'],
      entity: 'Profile',
      name: 'PK',
    };

    const profile = joinIndexCursor(profileObject, config);

    expect(profile).toEqual('profile⋮PK⋮antoniopresto∙A123⋮B456⋮');

    const profileParsed = parseIndexCursor(profile, config);

    expect(profileParsed).toEqual({
      PKFieldName: 'PK',
      PKPart: 'profile⋮PK⋮antoniopresto∙A123⋮',
      PKPartOpen: 'profile⋮PK⋮antoniopresto∙A123',
      SKFieldName: 'SK',
      SKPart: 'B456',
      cursor: 'profile⋮PK⋮antoniopresto∙A123⋮B456⋮',
      entity: 'profile',
      filter: {
        PK: 'profile⋮PK⋮antoniopresto∙A123⋮',
        SK: 'B456',
        _id: 'profile⋮PK⋮antoniopresto∙A123⋮B456⋮',
      },
      name: 'PK',
      parentPrefix: null,
      relatedTo: null,
    });

    const contactObject = {
      PK: ['U7890'],
      SK: ['email'],
      entity: 'ContactType',
      name: 'PK',
      relatedTo: 'Profile',
    };

    const contact = joinIndexCursor(contactObject, config);

    expect(contact).toEqual('profile⋮PK⋮U7890⋮contacttype⋮email⋮');

    const contactParsed = parseIndexCursor(contact, config);

    expect(contactParsed).toMatchObject({
      PKFieldName: 'PK',
      PKPart: 'profile⋮PK⋮U7890⊰contacttype⋮',
      PKPartOpen: 'profile⋮PK⋮U7890⊰contacttype',
      SKFieldName: 'SK',
      SKPart: 'email',
      cursor: 'profile⋮PK⋮U7890⊰contacttype⋮email⋮',
      entity: 'contacttype',
      filter: {
        PK: 'profile⋮PK⋮U7890⊰contacttype⋮',
        SK: 'email',
        _id: 'profile⋮PK⋮U7890⊰contacttype⋮email⋮',
      },
      name: 'PK',
      parentPrefix: 'profile⋮PK⋮U7890⊰',
      relatedTo: 'profile',
    });

    const contactStatusObject = {
      PK: ['U888'],
      SK: ['CONTACT_STT_SK'],
      entity: 'ContactStatus',
      name: 'PK',
      relatedTo: 'ContactType',
    };

    const contactStatus = joinIndexCursor(contactStatusObject, config);

    expect(contactStatus).toEqual(
      `contacttype⋮PK⋮U888⋮contactstatus⋮CONTACT_STT_SK⋮`
    );

    const contactStatusParsed = parseIndexCursor(contactStatus, config);

    expect(contactStatusParsed).toMatchObject({
      PKPart: 'contacttype⋮PK⋮U888⊰contactstatus⋮',
      PKPartOpen: 'contacttype⋮PK⋮U888⊰contactstatus',
      SKPart: 'CONTACT_STT_SK',
      cursor: 'contacttype⋮PK⋮U888⊰contactstatus⋮CONTACT_STT_SK⋮',
      entity: 'contactstatus',
      name: 'PK',
      parentPrefix: 'contacttype⋮PK⋮U888⊰',
      relatedTo: 'contacttype',
    });

    const keyInKeyObject = {
      PK: ['kink', profile],
      SK: [],
      entity: 'Kinkies',
      name: '_id',
    };

    const keyInKey = joinIndexCursor(keyInKeyObject, config);

    expect(keyInKey).toEqual(
      `kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮⋮`
    );

    const kinkParsed = parseIndexCursor(keyInKey, config);

    expect(kinkParsed).toMatchObject({
      PKPart: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮',
      PKPartOpen: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙',
      SKPart: '',
      cursor: 'kinkies⋮_id⋮kink∙profile⦙PK⦙antoniopresto⦁A123⦙B456⦙⋮⋮',
      entity: 'kinkies',
      name: '_id',
      parentPrefix: null,
      relatedTo: null,
    });
  });
});
