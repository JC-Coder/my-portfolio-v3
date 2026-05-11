import {defineArrayMember, defineField, defineType} from 'sanity'

export const experienceType = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo Upload',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'logoUrl',
      title: 'Logo URL or Path',
      type: 'string',
    }),
    defineField({
      name: 'logoType',
      title: 'Logo Type',
      type: 'string',
      options: {
        list: [
          {title: 'Image', value: 'image'},
          {title: 'Text', value: 'text'},
          {title: 'Text Pill', value: 'text-pill'},
        ],
      },
    }),
    defineField({
      name: 'roles',
      title: 'Roles',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'role',
          title: 'Role',
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'startDate',
              title: 'Start Date',
              type: 'string',
              description: 'Use the current app format, for example 2024-12.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'endDate',
              title: 'End Date',
              type: 'string',
              description: 'Use Present for current roles.',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'tech',
              title: 'Tech',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'moreTech',
              title: 'More Tech',
              type: 'array',
              of: [defineArrayMember({type: 'string'})],
            }),
            defineField({
              name: 'showLine',
              title: 'Show Timeline Line',
              type: 'boolean',
              initialValue: true,
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'type',
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      validation: (rule) => rule.required().integer().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{field: 'order', direction: 'asc'}],
    },
  ],
  preview: {
    select: {
      title: 'company',
      subtitle: 'description',
      media: 'logo',
    },
  },
})
