﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Stomatologichskaya_klinika
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Материал.
    /// </summary>
    // *** Start programmer edit section *** (Материал CustomAttributes)

    // *** End programmer edit section *** (Материал CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("МатериалE", new string[] {
            "КодМатериала as \'Код материала\'",
            "Наименование as \'Наименование\'"})]
    [View("МатериалL", new string[] {
            "КодМатериала as \'Код материала\'",
            "Наименование as \'Наименование\'"})]
    public class Материал : ICSSoft.STORMNET.DataObject
    {
        
        private int fКодМатериала;
        
        private string fНаименование;
        
        private IIS.Stomatologichskaya_klinika.Производитель fПроизводитель;
        
        // *** Start programmer edit section *** (Материал CustomMembers)

        // *** End programmer edit section *** (Материал CustomMembers)

        
        /// <summary>
        /// КодМатериала.
        /// </summary>
        // *** Start programmer edit section *** (Материал.КодМатериала CustomAttributes)

        // *** End programmer edit section *** (Материал.КодМатериала CustomAttributes)
        public virtual int КодМатериала
        {
            get
            {
                // *** Start programmer edit section *** (Материал.КодМатериала Get start)

                // *** End programmer edit section *** (Материал.КодМатериала Get start)
                int result = this.fКодМатериала;
                // *** Start programmer edit section *** (Материал.КодМатериала Get end)

                // *** End programmer edit section *** (Материал.КодМатериала Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материал.КодМатериала Set start)

                // *** End programmer edit section *** (Материал.КодМатериала Set start)
                this.fКодМатериала = value;
                // *** Start programmer edit section *** (Материал.КодМатериала Set end)

                // *** End programmer edit section *** (Материал.КодМатериала Set end)
            }
        }
        
        /// <summary>
        /// Наименование.
        /// </summary>
        // *** Start programmer edit section *** (Материал.Наименование CustomAttributes)

        // *** End programmer edit section *** (Материал.Наименование CustomAttributes)
        [StrLen(255)]
        public virtual string Наименование
        {
            get
            {
                // *** Start programmer edit section *** (Материал.Наименование Get start)

                // *** End programmer edit section *** (Материал.Наименование Get start)
                string result = this.fНаименование;
                // *** Start programmer edit section *** (Материал.Наименование Get end)

                // *** End programmer edit section *** (Материал.Наименование Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материал.Наименование Set start)

                // *** End programmer edit section *** (Материал.Наименование Set start)
                this.fНаименование = value;
                // *** Start programmer edit section *** (Материал.Наименование Set end)

                // *** End programmer edit section *** (Материал.Наименование Set end)
            }
        }
        
        /// <summary>
        /// Материал.
        /// </summary>
        // *** Start programmer edit section *** (Материал.Производитель CustomAttributes)

        // *** End programmer edit section *** (Материал.Производитель CustomAttributes)
        [PropertyStorage(new string[] {
                "Производитель"})]
        [NotNull()]
        public virtual IIS.Stomatologichskaya_klinika.Производитель Производитель
        {
            get
            {
                // *** Start programmer edit section *** (Материал.Производитель Get start)

                // *** End programmer edit section *** (Материал.Производитель Get start)
                IIS.Stomatologichskaya_klinika.Производитель result = this.fПроизводитель;
                // *** Start programmer edit section *** (Материал.Производитель Get end)

                // *** End programmer edit section *** (Материал.Производитель Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Материал.Производитель Set start)

                // *** End programmer edit section *** (Материал.Производитель Set start)
                this.fПроизводитель = value;
                // *** Start programmer edit section *** (Материал.Производитель Set end)

                // *** End programmer edit section *** (Материал.Производитель Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "МатериалE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МатериалE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МатериалE", typeof(IIS.Stomatologichskaya_klinika.Материал));
                }
            }
            
            /// <summary>
            /// "МатериалL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View МатериалL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("МатериалL", typeof(IIS.Stomatologichskaya_klinika.Материал));
                }
            }
        }
    }
}
